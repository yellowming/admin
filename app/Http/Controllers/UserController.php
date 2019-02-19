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
    public function list(Request $request)
    {
        //用户列表筛选查询
        $data = User::where('id','>',0);
        if($request->search) $data->where('name', 'like', "{$request->search}%")->orWhere('email', 'like', "%{$request->search}%");
        if($request->sortBy) $data->orderBy($request->sortBy, $request->desc=="true" ? "desc":"asc");
        return response()->json([
            "success"=> $data->paginate($request->row ?? 5)
        ]);
    }

    public function add(Request $request)
    {
        //1.验证字段格式
        //2.通过email查重
        try{
            return User::create($request->all());
        }catch(Exception $e){
            dd($e);
        };
    }

    public function delete(Request $request)
    {
        return User::where('id', '=', $request->id)->delete();
    }

    public function edite(Request $request)
    {
        $update = $request->all();
        if(!$update["password"]) unset($update["password"]); 
        return User::where('id', $request->id)->update($update);
    }
}
