export async function getPost() {
  const data = await fetch(
    "https://cms.relyte.space/wp-json/wp/v2/posts?_embed&_fields=title,excerpt,slug,_embedded,_links,status,date,id",
  );
  const res = await data.json();

  return res;
}

export async function getPostById(id) {
  const data = await fetch(
    `https://cms.relyte.space/wp-json/wp/v2/posts/${id}?_embed&_fields=title,excerpt,slug,_embedded,_links,status,date,id,content`,
  );
  const res = await data.json();

  return res;
}
