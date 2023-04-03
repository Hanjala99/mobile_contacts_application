<template>
    <section class="container mt-3">
        <h2 class="fw-bold">
            <i class="fa-sharp fa-solid fa-circle-arrow-left" @click="$router.go(-1)"></i>
            Edit Details of Contact
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
                    <form @submit.prevent="updataContact()" class="d-flex justify-content-center align-items-center flex-column">
                        <input type="text" v-model="contacts.name" class="form-control" placeholder="Your name">
                        <input type="text" v-model="contacts.userImage" class="form-control" placeholder="Photo URL">
                        <input type="text" v-model="contacts.email" class="form-control" placeholder="Email">
                        <input type="text" v-model="contacts.mobileNumber" class="form-control" placeholder="Mobile">
                        <input type="text" v-model="contacts.companyName" class="form-control" placeholder="Company">
                        <input type="text" v-model="contacts.title" class="form-control" placeholder="Title">
                        <button class="btn btn-dark px-4 py-1" @click="updataContact()">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';


export default {
    name:'EditContacts',
    data(){
        return {
            updateContactId: this.$route.params.id,
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
    created: async function () {
        try {
              let updateContactData = await axios.get(`http://localhost:9000/contacts/${this.updateContactId}`);
              console.log(updateContactData.data);
              this.contacts = updateContactData.data;
        }
        catch(error){
            console.log(error)
        }
    },
    methods:{
        updataContact: async function () {
            try{
                let res = await axios.put(`http://localhost:9000/contacts/${this.updateContactId}`, this.contacts);
                if(res){
                    return this.$router.push('/');
                }else{
                    return this.$router.push(`/View/${this.updateContactId}`);
                }
            }catch(error){
                console.log(error);
            }
        },
    }
}

</script>