<?php include '../../public/config/config.php'; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="ROBOTS" content="ALL">
    <meta name="Engine" content="all">
    <meta name="distribution" content="global">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php include 'links.php'; ?>
    <title><?php echo $websiteName; ?> User Portal</title>
</head>

<body>
    <div class="overlay-div"></div>
    <?php include "src/header.php" ?>
    <div class="absolute w-[calc(100%-230px)] h-[calc(100%-70px)] right-0 top-[70px] flex justify-center h-custom-screen-mm:w-full">
        <div class="w-[96%] mt-[15px] flex flex-wrap justify-between">
            <div class="w-[100%] h-[calc(100%-20px)] bg-white/90 rounded overflow-auto text-secondary-color gap-5" id="main">
               <?php $page="dashboard";?>
			    <?php include 'config/content-page.php';?>
            </div>
        </div>
        <script>getUser();</script>
        <script>sessionValidation();</script>
    </div>

</body>
</html>