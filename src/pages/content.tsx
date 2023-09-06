export default function Content({ data }: any) {
  console.log({ data });
  return (
    <>
      <h1>data.name</h1>
      <h2>data.company</h2>
      <h3>data.email</h3>
    </>
  );
}

export async function getServerSideProps() {
  console.log("i am called");
  const user = {
    name: "afzaal",
    company: "seebiz",
    email: "abc@gmail.com",
  };
  return {
    props: { data: user },
  };
}
