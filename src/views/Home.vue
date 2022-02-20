<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCards :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
import BlogCards from "../components/BlogCard";

export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCards
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding.jpg",
      },
      sampleBlogPost: [
        {
          title: "This is Filler Title!",
          blogHTML: "This is a filler blog post title!",
          blogCoverPhoto: "beautiful-stories.jpg",
        },
        {
          title: "This is Filler Title!",
          blogHTML: "This is a filler blog post title!",
          blogCoverPhoto: "designed-for-everyone.jpg",
        },
      ],
      sampleBlogCards: [
        { blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1.jpg", blogDate: "May 2, 2021" },
        { blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2.jpg", blogDate: "May 2, 2021" },
        { blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3.jpg", blogDate: "May 2, 2021" },
        { blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4.jpg", blogDate: "May 2, 2021" },
      ]
    };
  },
};
</script>


<style lang="scss" scoped>

.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}


</style>
