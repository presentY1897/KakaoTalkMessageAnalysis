# Analysis Kakaotalk Message Data

This is a simple web service analysis kakaotalk messenger data, kakaotalk app provide talking data as txt file.
The service based on node.js with d3js

## Analysis

Text was analyzed as time-series and person, message.

## Sequence

### Sudo

1. User upload txt data on service.
2. Data was analyzed in user's website.
3. Display dynamic data viewer based on d3js.

### Develop

1. JS
- Reader: About file reading
    - FileExtract: This is txt file getter, file would be drag-drop or file upload.
    - PreProcessing: Raw text change to data.
- Analyzer: Data analysis
    - Indexing
    - Grouping
    - Statistic
- Viewer
    - Static
    - DynamicAction
- Main

2. HTML, CSS
- MainPage.html
- DefaultTheme.css
- Animation.css