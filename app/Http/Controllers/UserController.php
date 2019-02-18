<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }
    //
    public function list(){
        return response()->json(['success' => User::all()]);
    }

    public function add(Request $request){
        $data = request(['name','email', 'password']);
        try{
            return User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => bcrypt($data['password']),
            ]);
        }catch(Exception $e){
            dd($e);
        };
        
    }
}
