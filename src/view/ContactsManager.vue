<template>
    <section class="container my-3">
        <h2 class="fw-bold">
            Contact Manager
            <router-link to="/Add" class="bg-dark text-decoration-none text-white p-2 fs-6 fw-light rounded-1">
                <i class="fa-solid fa-plus"></i> New Contact
            </router-link>
        </h2>
        <p class="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, et repellat consectetur
            dicta expedita
            distinctio, rerum, quibusdam quas repudiandae debitis autem exercitationem sint tempora culpa blanditiis.
            Doloribus nemo asperiores quas.
        </p>
        <form>
            <div class="row">
                <div class="col-4">
                    <div class="input-group input-group-sm mb-0">
                        <input type="text" class="form-control border-0 outline-0" placeholder="Search Name">
                        <button type="submit" class="btn btn-dark">Submit</button>
                    </div>
                </div>
            </div>
        </form>



        <div class="spinner-loading-section" v-if="loading">
            <div class="row">
                <div class="col">
                    <div class="d-flex justify-content-center align-items-center">
                        <SpinnerLoading />
                    </div>
                </div>
            </div>
        </div>

        <div class="error-msg-section" v-if="errorMsg">
            <div class="row">
                <div class="col">
                    <div class="d-flex justify-content-center align-items-center">
                        <h4 class="text-danger">{{ this.errorMsg }}</h4>
                    </div>
                </div>
            </div>
        </div>

        <div class="card-section mt-4" v-if="contactManagerList.length > 0">
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col-lg-6 col-md-12" v-for="contactlist in contactManagerList" :key="contactlist.id">
                    <div class="card shadow-lg p-3">
                        <div class="row">
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6 mb-sm-2">
                                <div class="image-box">
                                    <img :src=contactlist.userImage alt="" />
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-7 col-sm-7">
                                <ul class="contact-content p-0">
                                    <li>Name: <span class="fw-bold">{{ contactlist.name }}</span></li>
                                    <li>Mobile: <span class="fw-bold">{{ contactlist.mobileNumber }}</span></li>
                                    <li class="border-0">Email: <span class="fw-bold">{{ contactlist.email }}</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-2 col-md-2 col-sm-2 crud-content">
                                <ul class="text-center p-0">
                                    <li class="bg-warning">
                                        <router-link :to="`/View/${contactlist.id}`"><i
                                                class="fa-solid fa-eye text-white"></i>
                                        </router-link>
                                    </li>
                                    <li class="bg-dark">
                                        <router-link :to="`/Edit/${contactlist.id}`"><i
                                                class="fa-solid fa-pen text-white"></i>
                                        </router-link>
                                    </li>
                                    <li class="bg-danger mb-0" @click="deleteContact(contactlist.id)"><i
                                            class="fa-solid fa-trash text-white"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import SpinnerLoading from '../components/SpinnerLoading.vue';

export default {
    name: 'ContactsManager',
    components: {
        SpinnerLoading
    },
    data() {
        return {
            contactManagerList: [],
            loading: false,
            errorMsg: false
        }
    },
    created: async function () {
        try {
            const contactData = await axios.get('http://localhost:9000/contacts');
            this.loading = false;
            console.log("success", contactData.data);
            this.contactManagerList = contactData.data;
            this.errorMsg = false;
        }
        catch (error) {
            console.log("error", error.message);
            this.errorMsg = error.message;
        }
    },
    methods: {
        deleteContact: async function (id) {
            try {
                let response = await axios.delete(`http://localhost:9000/contacts/${id}`)
                if (response) { 
                    const contactData = await axios.get('http://localhost:9000/contacts');
                    this.loading = false;
                    console.log("success", contactData.data);
                    this.contactManagerList = contactData.data;
                    this.errorMsg = false;
                }
            }
            catch (error) {
                console.log("error", error.message);
                this.errorMsg = error.message;
            }
        },
    }
}

</script>

<style>

</style>