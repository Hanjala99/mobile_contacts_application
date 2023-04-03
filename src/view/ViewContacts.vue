<template>
    <section class="container mt-3">
        <h2 class="fw-bold">
            <i class="fa-sharp fa-solid fa-circle-arrow-left" @click="$router.go(-1)"></i>
            View Details of Contact
        </h2>
        <p class="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, et repellat consectetur
            dicta expedita
            distinctio, rerum, quibusdam quas repudiandae debitis autem exercitationem sint tempora culpa blanditiis.
            Doloribus nemo asperiores quas.
        </p>

        <div class="error-msg-section" v-if="errorMsg">
            <div class="row">
                <div class="col">
                    <div class="d-flex justify-content-center align-items-center">
                        <h4 class="text-danger">{{this.errorMsg}}</h4>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mt-3" v-if="!errorMsg">
            <div class="bg-white add-form-section p-5">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                       <img :src="viewcontactList.userImage" alt="">
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                        <ul class="contact-content p-0 w-100">
                            <li>Name: <span class="fw-bold">{{this.viewcontactList.name}}</span></li>
                            <li>Mobile: <span class="fw-bold">{{this.viewcontactList.mobileNumber}}</span></li>
                            <li>Email: <span class="fw-bold">{{this.viewcontactList.email}}</span></li>
                            <li>Company: <span class="fw-bold">{{this.viewcontactList.companyName}}</span></li>
                            <li class="border-0">Title: <span class="fw-bold">{{this.viewcontactList.title}}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';


export default {
    name: 'ViewContacts',
    data() {
        return {
            viewContactId: this.$route.params.id,
            viewcontactList:{},
            errorMsg:false
        }
    },
    created: async function () {
        try {
            let viewcontactData = await axios.get(`http://localhost:9000/contacts/${this.viewContactId}`);
            console.log(viewcontactData);   
            this.viewcontactList = viewcontactData.data;
            this.errorMsg = false

        }catch(error){
            console.log(error);
            this.errorMsg = error
        }
    }
}

</script>