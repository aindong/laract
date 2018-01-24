<?php
namespace App\Http\Controllers\Api;

use App\Http\Requests\Auth\LoginRequest;
use App\Laract\Abstracts\ApiController;
use App\Laract\Abstracts\Request;
use GuzzleHttp\Client;

class LoginController extends ApiController
{
    public function login(LoginRequest $request)
    {
        try {
            $http = new Client();

            $response = $http->post(env('APP_URL') . '/oauth/token', [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => env('PASSWORD_CLIENT_ID'),
                    'client_secret' => env('PASSWORD_CLIENT_SECRET'),
                    'username' => $request->email,
                    'password' => $request->password,
                    'remember' => $request->remember,
                    'scope' => '',
                ]
            ]);

            return json_decode((string) $response->getBody(), true);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'invalid_credentials',
                'message' => "{$e->getCode()}: {$e->getMessage()}"
            ], 401);
        }
    }

    public function logout(Request $request)
    {
        $accessToken = $request->user()->token();
        \DB::table('oauth_refresh_tokens')
            ->where('access_token_id', $accessToken->id)
            ->update([
                'revoked' => true
            ]);

        $accessToken->revoke();

        return response()->json([], 201);
    }
}