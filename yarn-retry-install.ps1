Write-Host "=== Yarn Retry Installer ===" -ForegroundColor Cyan

$maxRetries = 5
$delay = 10

# Use npm registry
$registry = "https://registry.npmjs.org/"
Write-Host "Using registry: $registry" -ForegroundColor Yellow
yarn config set registry $registry | Out-Null

for ($i = 1; $i -le $maxRetries; $i++) {
    Write-Host "Attempt $i of $maxRetries..." -ForegroundColor Yellow
    yarn install --network-timeout 600000
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Yarn install successful!" -ForegroundColor Green
        exit 0
    } else {
        Write-Host "⚠ Failed (try $i/$maxRetries)" -ForegroundColor Red
        if ($i -lt $maxRetries) {
            Write-Host "⏳ Retrying in $delay seconds..." -ForegroundColor Yellow
            Start-Sleep -Seconds $delay
            $delay = [Math]::Min($delay * 2, 60)
        }
    }
}

Write-Host "❌ Yarn install failed after $maxRetries attempts." -ForegroundColor Red
exit 1