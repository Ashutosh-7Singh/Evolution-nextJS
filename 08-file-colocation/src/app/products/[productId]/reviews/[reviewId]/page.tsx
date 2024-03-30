import { notFound } from "next/navigation";

export default function ReviewDetails({
  params,
}: {
  params: {
    productId: String;
    reviewId: String;
  };
}) {
  if(parseInt(params.reviewId)>1000){//when id is greateer than 1000 then it shows not found and we make se custom nout.found.tsx page
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} fro product {params.productId}
    </h1>
  );
}
