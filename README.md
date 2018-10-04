## Remove exif data

#### OBJECTIVE
 A quick way to remove all exif data of files in a directory via a list of paths in a text file.
#### STEPS
1. Clone this repo into a directory
2. `cd` into directory containing your media files
3. generate your media text file. For exampled this will copy the full paths of all mp4 files to media.txt ```find $(pwd) -name "*.mp4" | sort -k 1.1,1.3 -k 1.6,1.7 -k 1.4,1.5 > media.txt```
4. copy the `cd` into the repo directory, and copy the media text file into it
5. run `npm i`
6. install `exiftool` for you environment: [see exiftool by Phil ](https://sno.phy.queensu.ca/~phil/exiftool/)
7. run `node index.js`

