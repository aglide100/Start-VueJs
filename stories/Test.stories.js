import Test from "./Test.vue";

export default {
    title:"Sample/Test",
    component: Test,

}

const Template = (args) => ({
    components: {Test},
    setup() {return {args};},
    Template: '<my-test />',
});

export const Info = Template.bind({});
Info.args = {
};