import { defineStore } from "pinia";
import { ref } from "vue";

export const usePosts = defineStore('posts',()=>{

    const posts = ref(  [
        {
            "title": "Autem eos aspernatur quos eos et unde dolores quo odio.",
            "content": "Accusamus possimus aut ipsum dolore sint qui ut. Quo ab quo veritatis consequatur sunt architecto qui. Odit minus rem labore adipisci molestiae quod reiciendis officiis. Vitae placeat quidem vel debitis fuga eveniet.",
            "image": "http://placeimg.com/640/480/nature",
            "Date": "2024-08-25T02:17:45.955Z"
        },
        {
            "title": "Ad quia et provident.",
            "content": "Quia quo ut ut laboriosam repellendus et veniam explicabo. Laboriosam rem occaecati modi ullam fuga rem aspernatur aut. Quia consequatur sint sit dolorem. Et eligendi nostrum eveniet ex eos ut. Repellat dolorum iste aut consequuntur voluptate deserunt.",
            "image": "http://placeimg.com/640/480/nightlife",
            "Date": "2024-08-25T05:37:54.445Z"
        },
        {
            "title": "Quod alias facere voluptatem esse dolor.",
            "content": "Voluptas voluptate eaque blanditiis dolorum ratione earum molestiae odit. Perferendis tenetur aut molestias quidem. Qui fugiat eligendi et provident sint iste. Reiciendis in rem molestias esse quaerat soluta.",
            "image": "http://placeimg.com/640/480/business",
            "Date": "2024-08-25T04:28:48.776Z"
        },
        {
            "title": "Aut occaecati aut dicta libero quia non aliquid quia.",
            "content": "Ea est quia magnam porro. Quia numquam magnam ad itaque corrupti quidem nisi. Itaque eum tempore nostrum. Et debitis excepturi ullam. Sit tempore aspernatur molestiae dignissimos minus nulla.",
            "image": "http://placeimg.com/640/480/people",
            "Date": "2024-08-24T20:48:37.978Z"
        },
        {
            "title": "Sunt voluptates iure necessitatibus.",
            "content": "Ea esse et occaecati ab dolorem quas nihil voluptate ab. Commodi suscipit harum deleniti id at id expedita aperiam. Adipisci a laborum aliquid deserunt deserunt neque.",
            "image": "http://placeimg.com/640/480/fashion",
            "Date": "2024-08-25T06:33:26.298Z"
        },
        {
            "title": "Unde dolore ullam ea sint.",
            "content": "Architecto exercitationem vitae autem maiores. Necessitatibus quia repellat illo reiciendis esse quam voluptatem tempora. Qui expedita dolor tempore. Ullam commodi culpa sit occaecati non blanditiis. Quia fugiat iusto sequi sit autem.",
            "image": "http://placeimg.com/640/480/food",
            "Date": "2024-08-25T02:06:15.527Z"
        },
        {
            "title": "Dolorum laudantium dolorum commodi deserunt quis voluptatem minima.",
            "content": "Et necessitatibus libero nisi dolor molestiae doloribus eligendi enim consequatur. Qui harum necessitatibus beatae. Sint quidem aut explicabo suscipit inventore minima consequatur optio debitis. Debitis temporibus asperiores. Voluptas blanditiis aut sit. Occaecati repudiandae nisi reiciendis suscipit beatae quisquam ullam.",
            "image": "http://placeimg.com/640/480/sports",
            "Date": "2024-08-25T01:07:27.124Z"
        },
        {
            "title": "Eum voluptatem tempora quis totam voluptatem illo nihil et ducimus.",
            "content": "Molestias est occaecati id dolorem aut nihil corrupti quia. Provident blanditiis quibusdam quidem doloremque voluptate at ut esse voluptas. Illum ducimus dolorem debitis molestias tempora vero enim inventore quia. Iure suscipit ducimus esse dolore. Possimus voluptatum excepturi non voluptatum minima.",
            "image": "http://placeimg.com/640/480/people",
            "Date": "2024-08-25T10:23:59.445Z"
        },
        {
            "title": "Et nihil commodi libero laborum omnis quas commodi veniam molestiae.",
            "content": "In ea hic sit dolores et dolores harum dolor aperiam. Consequatur dignissimos quis quas voluptatibus accusamus labore temporibus dignissimos dolor. Nam laudantium sint eos ipsam ut eligendi. Quos vel alias exercitationem. Facere et numquam soluta quisquam repudiandae nesciunt. Ipsum in reprehenderit nihil cum facilis earum.",
            "image": "http://placeimg.com/640/480/city",
            "Date": "2024-08-25T01:49:28.688Z"
        },
        {
            "title": "Voluptas ut debitis esse nisi et.",
            "content": "Ratione numquam libero facilis deleniti possimus nobis incidunt dicta omnis. Fugiat hic sed sit. Et ut voluptatem sit.",
            "image": "http://placeimg.com/640/480/sports",
            "Date": "2024-08-24T18:32:23.293Z"
        },
        {
            "title": "Repudiandae iure voluptates iure.",
            "content": "Est quia laborum earum quod quia. Et necessitatibus vel cum. Dolorem rerum possimus quaerat tenetur quae rerum repellendus quia.",
            "image": "http://placeimg.com/640/480/transport",
            "Date": "2024-08-25T10:24:15.371Z"
        },
        {
            "title": "Quo laborum atque impedit molestiae numquam voluptatibus ipsam nostrum.",
            "content": "Culpa harum error. Minus eligendi iusto et sit eveniet nihil. Delectus maxime commodi. Aliquid laborum optio ut itaque at.",
            "image": "http://placeimg.com/640/480/sports",
            "Date": "2024-08-24T17:29:30.034Z"
        },
        {
            "title": "Eum necessitatibus modi esse dolores sit culpa labore.",
            "content": "Dicta omnis exercitationem officia quia ea et vitae quo. Suscipit sed quia. Ullam voluptatibus numquam voluptas nesciunt. Adipisci laboriosam possimus distinctio velit. Iure qui porro.",
            "image": "http://placeimg.com/640/480/cats",
            "Date": "2024-08-24T14:28:59.193Z"
        },
        {
            "title": "Assumenda rerum officiis velit quos perferendis laudantium.",
            "content": "Expedita dolorem voluptas culpa quod culpa fugiat. Dolorem sunt magni doloremque consequuntur dolores. Voluptas totam qui iusto mollitia sit autem repellendus et sit. Inventore et mollitia voluptatem a impedit quibusdam. Tempore quae dolore cumque. Exercitationem praesentium quis sint et provident officiis nihil alias unde.",
            "image": "http://placeimg.com/640/480/business",
            "Date": "2024-08-25T06:19:48.646Z"
        },
        {
            "title": "Omnis dolorem nobis cum maxime sunt voluptatem accusamus in voluptate.",
            "content": "Voluptas voluptatem possimus aperiam non et ipsam eos sed. Similique ipsam mollitia eum. At quasi inventore numquam voluptatem ducimus dignissimos temporibus debitis itaque. Nesciunt cupiditate voluptas dolorum. Consequatur iste distinctio dolor quia consequatur. Soluta totam dignissimos doloremque.",
            "image": "http://placeimg.com/640/480/cats",
            "Date": "2024-08-24T11:13:00.580Z"
        },
        {
            "title": "Molestiae voluptatem dolores tempore eaque sit ab aliquid.",
            "content": "Deserunt laboriosam optio. Nemo ab unde fugiat et minima molestias cupiditate. Porro aspernatur perspiciatis ut et dolorum esse ad expedita. Sint quis accusantium debitis eius et fuga accusamus distinctio laborum.",
            "image": "http://placeimg.com/640/480/nightlife",
            "Date": "2024-08-24T23:06:11.184Z"
        },
        {
            "title": "Tempora aut nam perferendis recusandae iure.",
            "content": "Rerum non delectus et aut quas ut accusamus voluptatem consequatur. Dolores dicta et eaque dignissimos nostrum quas. Architecto illum doloremque placeat molestiae voluptatem velit. Sed unde qui aperiam.",
            "image": "http://placeimg.com/640/480/nightlife",
            "Date": "2024-08-25T00:23:05.136Z"
        },
        {
            "title": "Quod autem totam quas inventore aliquam facilis doloremque eum doloribus.",
            "content": "Omnis accusantium velit consequatur dolorem maiores magni vero nesciunt. Aut iure temporibus ratione molestias dolores porro consectetur. Rerum quia et libero voluptatem occaecati hic consectetur quia. Non sed excepturi. Non officia eveniet temporibus quibusdam blanditiis assumenda.",
            "image": "http://placeimg.com/640/480/abstract",
            "Date": "2024-08-25T03:50:33.617Z"
        },
        {
            "title": "Voluptatem explicabo quis consectetur qui molestiae harum.",
            "content": "Non explicabo illum occaecati sit tempore ut. Quas eligendi est veniam sunt consequatur. Voluptas sit odio quas omnis.",
            "image": "http://placeimg.com/640/480/technics",
            "Date": "2024-08-24T11:06:25.603Z"
        },
        {
            "title": "Qui autem nesciunt.",
            "content": "Cupiditate vero dolor tempora quidem vel ut rerum accusantium soluta. Dolores quis et repellendus quia molestiae culpa. Ut aut impedit enim autem illum id eligendi est at. Quis aut velit omnis et. Corporis voluptatem in ea a non.",
            "image": "http://placeimg.com/640/480/abstract",
            "Date": "2024-08-25T09:29:23.378Z"
        },
        {
            "title": "Et reprehenderit vel omnis quis.",
            "content": "Earum corrupti totam enim magni dolore. Repellendus iste aut assumenda voluptas et. Ipsum est quod sed est deserunt dolores. Rerum mollitia voluptatum voluptatum et unde iste. Aut error similique tempore nobis ut itaque quia autem. Nisi necessitatibus aut praesentium sequi id sapiente quas.",
            "image": "http://placeimg.com/640/480/business",
            "Date": "2024-08-24T17:12:34.444Z"
        },
        {
            "title": "Reprehenderit consectetur assumenda vitae eligendi dolores necessitatibus rerum ipsum.",
            "content": "Tenetur aut explicabo. Similique ea dignissimos corporis velit quibusdam et veritatis aut sunt. Sed et quis id vel deserunt. Ut facilis nulla voluptates ut aliquid molestias quia ad consequatur. Molestias id eaque corrupti qui ut. Pariatur et quod sunt quod sequi sit earum odit minus.",
            "image": "http://placeimg.com/640/480/nightlife",
            "Date": "2024-08-24T22:06:21.316Z"
        },
        {
            "title": "Est dolorum est qui consequatur deleniti laudantium.",
            "content": "Accusamus quia et ducimus rerum eos qui non. Molestiae enim qui ratione asperiores incidunt. Facere repellendus reiciendis modi vel quasi. Voluptate consequatur eos et tenetur eius et. Eos odio enim est unde voluptatem ut.",
            "image": "http://placeimg.com/640/480/nightlife",
            "Date": "2024-08-24T21:55:28.820Z"
        },
        {
            "title": "Architecto distinctio eos quis consequuntur dolore dolorem in inventore impedit.",
            "content": "Commodi culpa quo asperiores et sint natus praesentium dolores quia. Repellat qui totam sit libero asperiores et dolor modi tempora. Expedita aspernatur quae autem iure nam qui consequatur et. Amet voluptas id.",
            "image": "http://placeimg.com/640/480/nightlife",
            "Date": "2024-08-24T23:24:47.422Z"
        },
        {
            "title": "Laborum numquam et.",
            "content": "Excepturi qui et sint aut qui earum. Aut aliquam doloremque maxime corporis perferendis ea. Aut quo deserunt ut doloribus impedit. Blanditiis dicta qui maiores assumenda et omnis. Ducimus aut accusantium qui ratione nemo ut culpa doloremque aut.",
            "image": "http://placeimg.com/640/480/city",
            "Date": "2024-08-24T21:22:59.607Z"
        },
        {
            "title": "Aperiam mollitia consectetur rerum inventore.",
            "content": "Atque eum temporibus hic qui. Sunt necessitatibus aliquam rerum rerum ducimus aut ullam. Quibusdam et nemo libero. Sapiente sint incidunt ipsam quae quia velit.",
            "image": "http://placeimg.com/640/480/people",
            "Date": "2024-08-25T03:59:22.418Z"
        },
        {
            "title": "Ratione dolores id sequi ut et vel dolor qui at.",
            "content": "Veritatis laborum quas. Ut expedita ducimus et repellat vel molestias qui rerum dolorem. Dolorum dolores quis et delectus.",
            "image": "http://placeimg.com/640/480/animals",
            "Date": "2024-08-24T16:32:10.174Z"
        },
        {
            "title": "Reiciendis consequuntur et tempora possimus nesciunt nam vel.",
            "content": "Doloremque excepturi consequatur fuga sunt voluptate. Quam quos nesciunt libero ipsa quibusdam explicabo vel optio. Laboriosam distinctio quaerat labore dicta. Nesciunt sequi suscipit omnis odit et quas beatae ad quo. Quas quasi ut consequatur enim odio sit ut.",
            "image": "http://placeimg.com/640/480/fashion",
            "Date": "2024-08-24T13:43:41.780Z"
        },
        {
            "title": "Soluta sint commodi nam eveniet.",
            "content": "Cumque quia nihil qui ut. Ad ipsum facere aut beatae alias saepe laboriosam. Perspiciatis dolores praesentium ut quisquam recusandae laboriosam saepe.",
            "image": "http://placeimg.com/640/480/abstract",
            "Date": "2024-08-24T22:23:09.165Z"
        },
        {
            "title": "Dignissimos odit ut et sunt.",
            "content": "Quis et harum et eos illo iste sed. Animi voluptas officia autem. Dolorem ut dolorum et laboriosam autem sit accusantium.",
            "image": "http://placeimg.com/640/480/cats",
            "Date": "2024-08-24T15:26:07.592Z"
        }
        ])

    return {posts}
    
})