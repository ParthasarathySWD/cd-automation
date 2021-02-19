<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <style>
       body
       {
            background-image: url("/images/bg.jpg");
            background-size: 100%;
            background-repeat: no-repeat;
       }

    </style>
</head>

<body>

    <!-- React root DOM -->
    <div id="login" class="container">

    </div>
    <!-- React JS -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="{{ asset('js/mainscript.js') }}"></script>

</body>
</html>