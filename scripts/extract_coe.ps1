Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead('c:\Users\restd\Downloads\Content.docx')
$entry = $zip.Entries | Where-Object { $_.FullName -eq 'word/document.xml' }
$sr = New-Object System.IO.StreamReader($entry.Open())
$xml = $sr.ReadToEnd()
$sr.Close()
$zip.Dispose()
$xml | Out-File -FilePath 'c:\Users\restd\astreanox-new\coe_doc.xml' -Encoding utf8
Write-Output 'OK'
