import axios from "axios";
import { defineStore } from "pinia";
import { ref ,computed} from "vue";

export const usePages = defineStore('pages',()=>{
    const content = ref()
    const url = (slug) =>{
    axios.get(`https://beta2024.indokemika-group.com/wp-json/wp/v2/pages?slug=${slug}&_embed`)
    .then((res)=>{
      content.value = res.data
    })
    .catch(console.error())
  } 

  const getTitle = computed(() => {
   if(content.value){
    return  content.value[0].title.rendered
   }
  })

  const getImage = computed(() => {
    return 
     content.value[0]._embedded['wp:featuredmedia'][0].source_url
  })


  return{
    content,
    url,
    getTitle,
    getImage
  }

})