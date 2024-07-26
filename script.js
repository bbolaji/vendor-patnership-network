document.getElementById('partnershipForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Fetch form values
    const vendorName = document.getElementById('vendorName').value;
    const vendorEmail = document.getElementById('vendorEmail').value;
    const vendorPhone = document.getElementById('vendorPhone').value;
    const companyName = document.getElementById('companyName').value;
    const companyAddress = document.getElementById('companyAddress').value;
    const companyWebsite = document.getElementById('companyWebsite').value;
    const agreement = document.getElementById('agreement').value;

    // Perform form validation or further processing as needed

    // Submit the form (uncomment the line below in a real-world scenario)
    // this.submit();

    // For demonstration, alert the form values
    alert(`Vendor Name: ${vendorName}\nVendor Email: ${vendorEmail}\nVendor Phone: ${vendorPhone}\nCompany Name: ${companyName}\nCompany Address: ${companyAddress}\nCompany Website: ${companyWebsite}\nAgreement: ${agreement}`);
});
