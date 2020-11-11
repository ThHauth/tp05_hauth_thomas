<?php
 
require "../vendor/autoload.php";
use \Firebase\JWT\JWT;
include "User.php";


$app = new Slim\App();

$app->post('/connexion','connexion');

$app->post('/createUser','addUser');



function addUser($request,$response,$args) {
  $body = $request->getParsedBody();  
  $user = new User();
  $user->id = 1;
  $user->nom = $body['nom']; 
  $user->prenom = $body['prenom'];
  $user->civilite = $body['civilite'];
  $user->adresse = $body['adresse'];
  $user->codePostal = $body['codePostal'];
  $user->ville = $body['ville'];
  $user->pays = $body['pays'];
  $user->tel = $body['tel'];
  $user->username = $body['username'];
  $user->motDePasse = $body['motDePasse'];
  $user->mail = $body['mail'];
  return $response->withHeader('Access-Control-Expose-Headers', '*')->withHeader('Access-Control-Allow-Origin', '*')
  ->withHeader('Access-Control-Allow-Headers', '*')
  ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  ->withHeader('Access-Control-Allow-Credentials', 'true')
  ->withHeader("Content-Type", "application/json")->write(json_encode($user));
}

function connexion($request,$response,$args) {
  $secret = "makey1234567";
  $body = $request->getParsedBody();  
  $username = "thomas"; 
  $password = "pswd";
  $issuedAt= time();
  $expirationTime = $issuedAt + 60; 
  // jwtvalid for 60 seconds from the issued time
  $payload = array(
    'userid' => $username,
    'iat' => $issuedAt,
    'exp' => $expirationTime);

    if($body['username'] == $username && $body['password'] == $password){
      $token_jwt= JWT::encode($payload, $secret, "HS256");
      $response = $response->withHeader('Access-Control-Expose-Headers', '*')->withHeader("token", $token_jwt)->withHeader('Access-Control-Allow-Origin', '*')
      ->withHeader('Access-Control-Allow-Headers', '*')
      ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
      ->withHeader('Access-Control-Allow-Credentials', 'true')
      ->withHeader("Content-Type", "application/json");
      $data = array('name' => 'Thomas', 'success' => true);
      return $response->withJson($data);
    }
    else{
      
      $data = array('success' => false);
      return $response->withJson($data);
    }
    
  }

$app->run();

