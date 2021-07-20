<?php
    if(isset($_POST['sms'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $project = $_POST['project'];
        $message = $_POST['message'];
        $encodedMessage = urlencode($message);

        $authKey = "ekNJJjlLunPITPDFDo5FA6MqL";
        $senderId = "Marveyg";
        $route = 4;
        $posData = array(
            'authkey' => $authKey,
            'name' => $name,
            'message' => $encodedMessage,
            'sender' => $senderId,
            'route' => $route
        );
        $url="http://account.kudisms.net/api/sendhttp.php";

        $ch = curl_init();
        curl_setopt_array($ch, array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $posData
        ));

        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        $response = curl_exec($ch);
        if(curl_errno($ch))
        {
            echo 'error:' . curl_error($ch);
        }

        curl_close($ch);
    }
?>