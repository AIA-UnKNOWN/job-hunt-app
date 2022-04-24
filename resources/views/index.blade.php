<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf_token" content="{{ csrf_token() }}">
    <title>Job Hunt App</title>
    <link rel="stylesheet" href="{{ asset('css/index.css') }}" >
</head>
<body>
    
    <div id="root"></div>

    <script src="{{ asset('src/index.js') }}"></script>
</body>
</html>