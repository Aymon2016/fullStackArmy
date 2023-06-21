const getFullDate = async () => {
    const date = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    return date.toLocaleDateString('en-BD', options);
}

module.exports = getFullDate