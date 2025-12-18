import supabase from "@/lib/supabase";
// export const getPostList = async (page: string) => {
//   const response = await fetch(`/api/post/list?page=${page}&limit=5`);
//   const resData = await response.json();
//   return resData.data;
// };

// export const addPost = async (data: { title: string; content: string }) => {
//   const response = await fetch("/api/post/add", {
//     method: "POST",
//     body: JSON.stringify(data),
//   });
//   const resData = await response.json();
//   return resData.data;
// };




export const getPostList = async (page: string) => {
  const pageNumber = parseInt(page, 10) || 1;
  const limit = 5;
  const from = (pageNumber - 1) * limit;
  const to = from + limit - 1;

  const { data: posts, error } = await supabase
    .from('posts')
    .select('*')
    .range(from, to)
    .order('created_at', { ascending: false });

  if (error) throw error;
  const totalPages = Math.ceil((await supabase.from('posts').select('*', { count: 'exact' })).count! / limit);
  console.log("Fetched posts:", posts);
  console.log("Total pages:", totalPages); 
  return { posts, totalPages: totalPages,page: pageNumber,limit: limit };
};



export const addPost = async (data: { 
  title: string; 
  content: string; 
  userId: string;
}) => {
  const { data: post, error } = await supabase
    .from('posts')
    .insert([{ 
      title: data.title, 
      content: data.content,
      user_id: data.userId,
    }])
    .select('*')
    .single();

  if (error) throw error;
  return post.id;
};


export const getPost = async (id: string) => {
  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return post;
};
