import { notFound } from "next/navigation";

export async function getPost() {
  try {
    const data = await fetch(
      "https://cms.relyte.space/wp-json/wp/v2/posts?_embed&_fields=title,excerpt,id,date,status,_links,_embedded",
    );
    const res = await data.json();

    return res;
  } catch (e) {
    console.error(e);
    notFound();
  }
}

export async function getPostById(id) {
  const data = await fetch(
    `https://cms.relyte.space/wp-json/wp/v2/posts/${id}?_embed&_fields=title,excerpt,slug,_embedded,_links,status,date,id,content`,
  );
  const res = await data.json();

  if (res?.data?.status === 404) {
    console.error("Not Found");
    notFound();
  }

  return res;
}
