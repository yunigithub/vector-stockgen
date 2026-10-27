@echo off
REM convert-stock.bat - ubah hasil rekaman STOCKGEN (.webm / .mp4) jadi MP4 siap upload situs stok.
REM Syarat: ffmpeg terinstall dan bisa dipanggil dari terminal (https://www.gyan.dev/ffmpeg/builds/).
REM Cara pakai: taruh file .bat ini di folder berisi hasil rekaman, lalu dobel-klik.
REM Hasil: *_stock.mp4 (H.264 + yuv420p + faststart) di folder yang sama. File asli tidak dihapus.
for %%F in (*.webm *.mp4) do (
  echo %%F | findstr /C:"_stock.mp4" >nul
  if errorlevel 1 (
    if not exist "%%~nF_stock.mp4" (
      echo CONVERT  %%F  -^>  %%~nF_stock.mp4
      ffmpeg -y -hide_banner -loglevel error -i "%%F" -c:v libx264 -pix_fmt yuv420p -crf 18 -preset veryfast -movflags +faststart "%%~nF_stock.mp4"
    ) else (
      echo SKIP  %%F  ^(sudah ada %%~nF_stock.mp4^)
    )
  ) else (
    echo SKIP  %%F  ^(sudah hasil convert^)
  )
)
echo.
echo Selesai. Upload file *_stock.mp4 ke situs stok.
pause
