<?php

$getPost = filter_input_array(INPUT_POST, FILTER_DEFAULT);
$post = array_map("strip_tags", $getPost);

$action = $post['action'];
$response = array();
unset($post['action']);
usleep(400000);

switch ($action) {
    case 'create_user':
        //$response = $post;

        if (in_array("", $post)) {
            $response["error"] = "É precisso informar todos os dados.";
        } elseif (!filter_var($post['email'], FILTER_VALIDATE_EMAIL)) {
            $response["error"] = "Informe um e-mail válido.";
        } else {
            $user = new stdClass();
            $user->fisrs_name = $response['first_name'];
            $user->last_name = $response['last_name'];
            $user->email = $response['email'];

            //rotina de cadastro
            $response['user'] = $user;
        }
        break;
}

if (!empty($response)) {
    echo json_encode($response);
} else {
    $response["error"] = true;
    $response["errorMsg"] = "501 - Erro ao processar requisição.";
    echo json_encode($response);
}