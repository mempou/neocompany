


export default formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);

    // Options for formatting the date and time
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };

    return date.toLocaleString('en-US', options);
};
  

