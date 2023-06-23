<template lang="">
  <RouterView />
  <Navbar />

  <section class="p-section">
    <div class="p-section__contents">
      <h1 class="p-section__heading">Add new author</h1>
      <div class="p-section__status" :style="{ backgroundColor: backgroundColor }" v-if="status">
        {{ status }}
      </div>
      <div class="p-section__form">
        <div class="container">
          <form action="" @submit.prevent="saveItem">
            <label for="fname">Author Name</label>
            <input
              type="text"
              v-model="authorData.name"
              id="name"
              name="name"
              placeholder="Author name.."
            />

            <label for="lname">Author Address</label>
            <input
              type="text"
              id="address"
              v-model="authorData.address"
              name="address"
              placeholder="Author address.."
            />

            <label for="publication">Publication</label>
            <select id="publication" name="publication" v-model="authorData.publication">
              <option value="Marina publications">Marina publications</option>
              <option value="Utahan">Utahan</option>
            </select>

            <label for="lname">Total Books</label>
            <input
              type="text"
              id="address"
              v-model="authorData.totalBooks"
              name="address"
              placeholder="Total Books"
            />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
    <ProductView />
  </section>

  <section class="p-content">
    <div>
      <h1 class="p-section__heading">Reactivity and using of v-model directive</h1>
      <article class="p-content__count">{{ count }} {{ contents }}</article>
      <input v-model="contents" type="text" placeholder="Express your thought.." />

      <button class="p-content__button" @click="increment">Click for count</button>
    </div>
  </section>
</template>

<script>
import Navbar from '../../components/organisms/navbar/Navbar.vue'
import ProductView from '../../pages/admin/ProductView.vue'
import { ref } from 'vue'

let value = 12
let status = value > 10 ? 'new author' : 'old author'
let statusClass = status === 'new author' ? 'green' : '#f1ad36'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'admin',
  components: { Navbar, ProductView },
  //options api
  data() {
    const authorData = {
      name: '',
      address: '',
      totalBooks: '',
      publication: ''
    }
    return {
      status: status,
      backgroundColor: statusClass, //attribute binding
      contents: 'Focus on your goal',
      authorData
    }
  },
  methods: {
    saveItem() {
      this.authorsDataList.push({
        name: authorData.name,
        address: authorData.address,
        totalBooks: authorData.totalBooks,
        publication: authorData.publication
      })
    }
  },
  //composition api
  setup() {
    const count = ref(0)

    function increment() {
      count.value++
    }

    // expose the ref to the template
    return {
      count,
      increment
    }
  }
}
</script>
<style>
.p-section {
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 50px;
}
.p-section__form {
  padding: 12px;
  max-width: 500px;
}

/* Style inputs with type="text", select elements and textareas */
input[type='text'],
select,
textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
input[type='submit'] {
  background-color: #96abf9;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type='submit']:hover {
  background-color: #717da5;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
.p-section__status {
  padding: 6px;
  color: white;
  font-size: 16px;
  transform: skew(28deg, -33deg);
  display: inline-block;
  clip-path: polygon(
    50% 0%,
    80% 10%,
    100% 35%,
    100% 70%,
    80% 90%,
    50% 100%,
    20% 90%,
    0% 70%,
    0% 35%,
    20% 10%
  );
}
.p-section__heading {
  margin-bottom: 35px;
  text-decoration-line: overline;
}

/*------------------------content section----------------------*/
.p-content {
  padding: 30px;
}

.p-content__count {
  font-size: 20px;
  padding: 15px;
}

.p-content__button {
  padding: 12px;
  font-size: 15px;
  color: white;
  background-color: #96abf9;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}
</style>
