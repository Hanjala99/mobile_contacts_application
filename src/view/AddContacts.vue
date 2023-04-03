<template>
    <section class="container mt-3">
        <h2 class="fw-bold">
            <i class="fa-sharp fa-solid fa-circle-arrow-left" @click="$router.go(-1)"></i>
            Add Details of Contact
        </h2>
        <p class="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, et repellat consectetur
            dicta expedita
            distinctio, rerum, quibusdam quas repudiandae debitis autem exercitationem sint tempora culpa blanditiis.
            Doloribus nemo asperiores quas.
        </p>
        <div class="bg-white add-form-section">
            <div class="row">
                <div class="col-lg-4 col-sm-12">
                    <div class="d-flex justify-content-center mb-3">
                        <img :src="contacts.userImage" alt="">
                    </div>
                </div>
                <div class="col-lg-8 col-sm-12">
                        <form @submit.prevent="submitAddContact()" class="d-flex justify-content-center align-items-center flex-column">
                        <input type="text" v-model="contacts.name" class="form-control" placeholder="Your name">
                        <input type="text" v-model="contacts.userImage" class="form-control" placeholder="Photo URL">
                        <input type="text" v-model="contacts.email" class="form-control" placeholder="Email">
                        <input type="text" v-model="contacts.mobileNumber" class="form-control" placeholder="Mobile">
                        <input type="text" v-model="contacts.companyName" class="form-control" placeholder="Company">
                        <input type="text" v-model="contacts.title" class="form-control" placeholder="Title">
                        <button class="btn btn-dark px-4 py-1" @click="submitAddContact()">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import axios from 'axios';


export default {
    name: 'AddContacts',
    data() {
        return {
            contacts: {
                name: "",
                mobileNumber: "",
                email: "",
                companyName: "",
                title: "",
                userImage: ""
            },
        }
    },
    methods: {
        submitAddContact: async function() {
            try{
                let response = await axios.post("http://localhost:9000/contacts", this.contacts);
                if(response){
                    return this.$router.push('/'); 
                }else{
                    return this.$router.push('/Add'); 
                }
            }
            catch (error) {
                console.log("yes", error)
            }
    },
    },
}

</script>