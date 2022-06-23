

export default function createFilter(form, { handleFilter }) {
    const input = form.querySelector('input');
    const select = form.querySelector('select');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const dogData = { breed: formData.get('breed'), age: formData.get('age') };
        // *** call handleFilter with an object that has the breed and age;
        handleFilter(dogData);
    });

    return ({ breed, age }) => {
        // *** set the values of the select and input
        input.value = age;
        select.value = breed;
    };
}