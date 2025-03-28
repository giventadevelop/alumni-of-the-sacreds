# Create base gallery directory if it doesn't exist
$galleryPath = "public/images/gallery"
New-Item -ItemType Directory -Force -Path $galleryPath

# Define gallery folders
$folders = @(
    @{
        name = "Annual Day"
        id = "annual-day"
        subfolders = @("2023", "2022", "2021")
    },
    @{
        name = "Sports Day"
        id = "sports-day"
        subfolders = @("2023", "2022")
    },
    @{
        name = "Cultural Events"
        id = "cultural-events"
        subfolders = @("2023", "2022")
    },
    @{
        name = "Alumni Meet"
        id = "alumni-meet"
        subfolders = @("2023", "2022", "2021")
    }
)

# Create folders and placeholder files
foreach ($folder in $folders) {
    $folderPath = Join-Path $galleryPath $folder.id
    New-Item -ItemType Directory -Force -Path $folderPath

    # Create year subfolders
    foreach ($year in $folder.subfolders) {
        $yearPath = Join-Path $folderPath $year
        New-Item -ItemType Directory -Force -Path $yearPath

        # Create a placeholder text file
        $placeholderPath = Join-Path $yearPath "placeholder.txt"
        Set-Content -Path $placeholderPath -Value "Place your $($folder.name) $year images here"
    }
}