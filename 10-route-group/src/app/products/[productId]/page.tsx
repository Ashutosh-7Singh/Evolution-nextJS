export default function ProductDetails({
    params,
}:{
    params:{productId:string};
}){
    return (
        <h1>this is product details {params.productId}</h1>
    )
}

// export default function ProductDetails({params}:any){
//     return (
//         <h1>this is product details {params.productId}</h1>
//     )
// }