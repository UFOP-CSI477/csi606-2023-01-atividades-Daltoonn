//isso é so se eu quiser fazer tudo no mesmo lugar eu acho ruim colocar o sever tudo no mesmo lugar
//isso é so exemplo é muito meljot deixar o sever em outra pasta ainda mais por questoes como
//fazer aplicacao mobile etc, deixar SEPARADO é melhor do que fazer api na propia pasta


import {NextRequest, NextResponse} from "next/server";


export function GET(request : NextRequest){

    return new  NextResponse(JSON.stringify({
        message: "Lista de estados."
    }));

}


export function POST(request: NextRequest) {

}