<!DOCTYPE html>
<html>
<head>
  <title>Поиск по википедии</title>
  <link rel="stylesheet" type="text/css" href="style.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

</head>
<body>
  <div class="container wrapper">
    <div class="row">
      <div class="header text-center">
   <h1>Wikipedia viewer</h1>
    <h3>Click to search</h3>
    <h2>Go to random page</h2>
        </div>
    <div class="search col-md-12 col-sm-12 col-xs-12 text-center">
       <input id="search" type="search" class="searchInp" placeholder=" Search..."/>
        <input id="submit" type="submit" value="&#128270;"/>
        <div class="click_me text-center"></div>
    </div>
   
      <div class="output col-md-12 col-sm-12 col-xs-12"></div>
      </div>
      </div>
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script type="text/javascript" src="script.js"></script>
</body>
</html>