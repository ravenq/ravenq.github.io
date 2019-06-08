# 关于 C++ 打印 PDF 打印及 PDF 转图片、合并

原文: <http://www.aqcoder.com/post/content?id=42>

pdf（Portable Document Format 的简称，意为“便携式文档格式”），是由 Adobe Systems 用于与应用程序、操作系统、硬件无关的方式进行文件交换所发展出的文件格式。PDF 文件以 PostScript 语言图象模型为基础，无论在哪种打印机上都可保证精确的颜色和准确的打印效果，即 PDF 会忠实地再现原稿的每一个字符、颜色以及图象。

PDF 设计的初衷是为了解决多平台的打印问题，所以他不像 WORD 那样具有文档流结构，编辑方面没有 WORD 那样强大。

## 打印

需要打印 PDF 自然需要一个打印程序，可以打印 PDF 的程序有很多。Adobe 自家的有 PDF Reader、 Acrobat。商用的有金山 WPS、Foxit Reader。开源的有 xpdf reader 等。

当然，作为程序猿我们说的打印自然不是讨论如何使用这些软件打印 PDF。而是这么使用程序打印 PDF。

应用场景：第三方给你的系统提供了 PDF 格式的文件，在你的系统中有个打印按钮，点击之后去打印这个 PDF。

### 实现方法一

在客户端上安装一个 PDF 渲染程序（上面的几个 PDF 浏览器/编辑器程序都含有渲染功能），然后使用命令行调用打印。各种语言启动进程的方法这里就不赘述了。

显然，这种方法有个很大的缺点，要求客户机上必须安装一个渲染程序，或者吧他的程序包在你的程序包里，这样会有版权问题，还会使你的程序包变大。

### 实现方法二

讲方法二前，我们先来说说网传的一种方法

```C++
if (OpenPrinterA("Microsoft XPS Document Writer", &hPrinter, NULL))
{
    if (StartDocPrinterA(hPrinter, 1, (LPBYTE)&di))
    {
        if (StartPagePrinter(hPrinter))
        {
            bSuccess = WritePrinter(hPrinter, buffer, length, &dwWritten);
            EndPagePrinter(hPrinter);
        }
        EndDocPrinter(hPrinter);
    }
    ClosePrinter(hPrinter);
}
if (bSuccess == false)
{
    dwError = GetLastError();
}
```

这是 C++ 的实现网上还有一个 C# 的实现。

**这种方法是行不通的** ，你会发现有的人在帖子里回复何以，有的人回复不可以。这是为什么呢。

因为打印机一般只识别打印格式，如 PostScript 格式，而 PDF 格式是在 PostScript 格式之上的。但是有些新型的打印机也会识别 PDF 格式。这就是为什么有的人测试不可以，有的人测试可以的原因。

现在我们来讨论方法二。直接发送 PDF 文件到打印机是行不通的，所以只能乖乖的使用打印机 GDI 接口，吧 PDF 渲染到打印机 DC 上。

所以使用这个方法的前提是需要一个 PDF 渲染器，pdfium 是 Google  Chromium 的项目的一部分，也是一个 PDF 渲染器，我们可以使用  pdfium 解析 PDF 文件，并渲染到打印机 DC 上。

由于这种方法工程量有点大，所以我最终选择了第三种方法。

### 方法三

既然使用一个 PDF 渲染器工程量比较大，那么我们是否可以吧 PDF 文件变成图片呢。把图片渲染到打印机 DC 上就很容易了。

```sh
 -----       ------        -------------
| pdf | --> | image | --> | print DC API |
 -----       ------        -------------
```

由于我们后端是用 JAVA 实现的，所以转化这一步自然也可以挪到后端去做，后端我们选择了 [Apache PDFBox](https://pdfbox.apache.org/) 作为转化库。PDFbox 转化为图片就很容易了：

```java
public static List<BufferedImage> toImageList(InputStream pdf)
      throws InvalidPasswordException, IOException {
    int dpi = 96;
    PDDocument document = PDDocument.load(pdf);
    PDFRenderer renderer = new PDFRenderer(document);
    renderer.setSubsamplingAllowed(true);
    List<BufferedImage> ret = new ArrayList<BufferedImage>();
    for (int i = 0; i < document.getNumberOfPages(); i++) {
      BufferedImage bi = renderer.renderImageWithDPI(i, dpi, ImageType.RGB);
      ret.add(bi);
    }
    document.close();
    return ret;
  }
```

通过以上代码我们发现 PDFBox 也是一个 PDF 渲染器，但是客户端程序一般不会去用 JAVA 做，若果你的客户端程序是 JAVA 写的，哪可直接使用打印功能了。

那么在 C++ 里打印图片功能如何实现呢：

```C++
// data 为图片数据，这里我们使用图片 base64 数据，注意要去掉 base64 头部。
bool PrintImage(const std::string& printer, const std::string& data) {
  bool bAtoFit = true;
  char szDriver [16] = "WINSPOOL";
  char szPrinter [1024];
  DWORD cchBuffer = 255;
  HDC hdcPrint = NULL;
  HANDLE hPrinter = NULL;
  PRINTER_INFO_2A * pPrinterData;
  BYTE pdBuffer [102400];
  BOOL bReturn = FALSE;

  DWORD cbBuf = sizeof(pdBuffer);
  DWORD cbNeeded = 0;
  pPrinterData =(PRINTER_INFO_2A *)&pdBuffer[0];

  if (printer.empty())
      GetDefaultPrinterA(szPrinter, &cchBuffer);
  else
      strcpy_s(szPrinter, printer.c_str());

  if(!OpenPrinterA(szPrinter, &hPrinter, NULL))
  {
      return false;
  }

  if(GetPrinterA(hPrinter, 2, &pdBuffer[0], cbBuf,&cbNeeded))
      ClosePrinter(hPrinter);
  else
  {
      callback->Failure(-1, "get printer fail.");
      return false;
  }

  hdcPrint = CreateDCA(szDriver, szPrinter, pPrinterData->pPortName, NULL);
  CDC dc;
  if (!dc.Attach(hdcPrint)) {
      callback->Failure(-1, "No printer found!");
      return false;
  }

  dc.m_bPrinting = TRUE;
  DOCINFO di;
  // Initialise print document details
  ::ZeroMemory (&di, sizeof (DOCINFO));
  di.cbSize = sizeof (DOCINFO);
  di.lpszDocName = L"cef_print_image";
  // Begin a new print job
  BOOL bPrintingOK = dc.StartDoc(&di);
  // Get the printing extents
  // and store in the m_rectDraw field of a 
  // CPrintInfo object
  CPrintInfo Info;
  // just one page
  Info.SetMaxPage(1);
  int maxw = dc.GetDeviceCaps(HORZRES);
  int maxh = dc.GetDeviceCaps(VERTRES);
  Info.m_rectDraw.SetRect(0, 0, maxw, maxh);
  for (UINT page = Info.GetMinPage(); page <= Info.GetMaxPage() && bPrintingOK; page++)
  {
      // begin new page
      dc.StartPage();
      Info.m_nCurPage = page;

      // get bitmap
      CefRefPtr<CefBinaryValue> pData = CefBase64Decode(data);
      size_t lenDes = pData->GetSize();
      char* pDes = new char[lenDes];
      pData->GetData(pDes, lenDes, 0);

      BITMAP bm;
      CBitmap* pbmp = NULL;
      HBITMAP Hbitmap = NULL;
      HGLOBAL hMem = ::GlobalAlloc(GMEM_MOVEABLE, lenDes);
      LPVOID pImage = ::GlobalLock(hMem);
      memcpy(pImage, pDes, lenDes);
      IStream* pStream = NULL;
      ::CreateStreamOnHGlobal(hMem, FALSE, &pStream);
      Gdiplus::Bitmap gdi(pStream);
      gdi.GetHBITMAP(NULL, &Hbitmap);
      pbmp = CBitmap::FromHandle(Hbitmap);
      pbmp->GetBitmap(&bm);

      int w = bm.bmWidth;
      int h = bm.bmHeight;
      float rate = (float)maxw / w;
      // create memory device context
      CDC bmpDC;
      bmpDC.CreateCompatibleDC(&dc);
      bmpDC.SetMapMode(dc.GetMapMode());
      CBitmap *pBmp = bmpDC.SelectObject(pbmp);

      dc.SetStretchBltMode(STRETCH_DELETESCANS);
      // now stretchblt to maximum width on page
      if (bAutoFit)
          dc.StretchBlt(0, 0, maxw, maxh, &bmpDC, 0, 0, w, h, SRCCOPY);
      else
          dc.StretchBlt(0, 0, maxw, int(h * rate), &bmpDC, 0, 0, w, h, SRCCOPY);
      // clean up
      bmpDC.SelectObject(pBmp);
      pStream->Release();
      GlobalUnlock(hMem);
      GlobalFree(hMem);
      delete[] pDes;
      bPrintingOK = (dc.EndPage() > 0);   // end page
  }

  if (bPrintingOK)
  {
      dc.EndDoc(); // end a print job
      return true;
  }
  else
  {
      dc.AbortDoc();
      return false;
  }
}
```

用 C# 实现打印图片的功能估计会更容易一些。

## 合并问题

有时候我们会遇到需要将多个 PDF 合并到一起，PDFbox 有合并的功能：

```JAVA
public static void mergePdf(List<InputStream> pdfList, OutputStream out) throws IOException {
  PDFMergerUtility merger = new PDFMergerUtility();
  merger.addSources(pdfList);
  merger.setDestinationStream(out);
  merger.mergeDocuments(MemoryUsageSetting.setupMainMemoryOnly());
}
```

假设有两份 PDF 文件 pdf1，pdf2 这两份 PDF 文件都只含有一页，并且内容只有一行文字：

![pdf1](https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/about-pdf-pdf1.png)

图 2-1 pdf1

![pdf2](https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/about-pdf-pdf2.png)

图 2-2 pdf1

合并以后将会得到一份两页的 PDF 文件。这是因为 PDF 并不是 **流式文档结构** 的。

### 文档结构

> 摘自百度百科

PDF文件结构主要可以分为四个部分：

首部

用文本编辑器打开的时候就可以看到：%PDF-1.4 这样的字眼，其中最后一位就是PDF文件格式版本号，软件的版本号总要比文件格式的版本号高1，比如说Read 5能打开的内容就是4。
文件体

里面由若干个的obj对象来组成，类似这种形式：

```text
3 0 obj
<<
/Type /Pages
/Count 1
/Kids [4 0 R]
>>
endobj
```

第一个数字称为对象号，来唯一标识一个对象的，第二个是产生号，是用来表明它在被创建后的第几次修改，所有新创建的PDF文件的产生号应该都是0，即第一次被创建以后没有被修改过。上面的例子就说明该对象的对象号是3，而且创建后没有被修改过。

对象的内容应该是包含在<< 和>>之间的，最后以关键字endobj结束。

交叉引用表

用来索引各个obj 对象在文档中的位置，以实现随机访问，它的形式是：

```text
xref
0 8
0000000000 65535f
0000000009 00000n
0000000074 00000 n
0000000120 00000 n
0000000179 00000 n
0000000322 00000 n
0000000415 00000 n
0000000445 00000 n
```

xref说明一个交叉引用表的开始，交叉引用表的第一行0 8 说明下面各行所描述的对象号是从0开始，并且有8个对象。

0000000000 65535f，一般每个PDF文件都是以这一行开始交叉应用表的，说明对象0的起始地址为0000000000，产生号（generation number）为65535，也是最大产生号，不可以再进行更改，而且最后对象的表示是f, 表明该对象为free, 这里，大家可以看到，其实这个对象可以看作是文件头。

0000000009 00000n就是表示对象1，0000000009是其偏移地址，00000为5位产生号（最大为65535），0表明该对象未被修改过, n表示该对象在使用，区别与自由对象(f)，可以更改。

尾部

```text
Trailer
<<
/Size 8
/Root 1 0 R
>>
startxref
553
%%EOF
```

trailer 说明文件尾 trailer对象的开始。

/Size 8说明该PDF文件的对象数目。

/Root 1 0 R说明根对象的对象号为1。

Startxref

553说明交叉引用表的偏移地址，从而可以找到PDF文档中所有的对象的相对地址，进而访问对象。

%%EOF为文件结束标志。

### 图片合并

那么我们怎么才能得到我们想要的合并的效果呢，这里有个很土的方法。使用绘制图片的方法，倒着遍历图片，发现像素不是 (255,255,255) 则记录位置，讲下一张图片从这个偏移点开始绘制。最终得到的效果如下：

![merge](https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/about-pdf-merge.png)

图 2-3 合并图片

```JAVA
public static List<BufferedImage> mergeImage(List<BufferedImage> imgList, MergeImageOptions options)
      throws IOException {
  if (options == null) {
    options = new MergeImageOptions();
  }

  List<BufferedImage> ret = new ArrayList<BufferedImage>();
  BufferedImage mergeImg = null;
  int imgWidth = options.getWidth();
  int imgHeight = options.getHeight();
  int offset = 0;
  for (int p = 0; p < imgList.size(); p++) {
    BufferedImage bi = imgList.get(p);
    int width = bi.getWidth();
    int height = bi.getHeight();
    int minx = bi.getMinX();
    int miny = bi.getMinY();
    int realHeight = height;
    boolean done = false;
    for (int j = height - 1; j > miny; j--) {
      for (int i = minx; i < width; i++) {
        int pixel = bi.getRGB(i, j);
        int r = (pixel & 0xff0000) >> 16;
        int g = (pixel & 0xff00) >> 8;
        int b = (pixel & 0xff);
        if (r != 255 || g != 255 || b != 255) {
          realHeight = j;
          done = true;
          break;
        }
      }
      if (done) {
        break;
      }
    }
    if (p == 0) {
      imgWidth = Math.max(imgWidth, width);
      imgHeight = Math.max(imgHeight, height);
    }

    if (mergeImg == null || (offset + realHeight) > imgHeight) {
      mergeImg = new BufferedImage(imgWidth, imgHeight, BufferedImage.TYPE_INT_RGB);
      ret.add(mergeImg);
      offset = 0;
    }

    Graphics g = mergeImg.getGraphics();
    g.drawImage(bi, minx, offset, null);
    offset += realHeight;
    g.dispose();
  }
  return ret;
}
```

## 介绍几个关于 PDF 的实用库

- [pdfium -- Chromium PDF 操作库](https://opensource.google.com/projects/pdfium)
- [xpdf --  开源的 PDF 浏览器](http://www.xpdfreader.com/)
- [Poppler -- 基于 xpdf 的 PDF 渲染库](https://poppler.freedesktop.org/)

![ravenq](https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/ravenq-qr-gray.png)
