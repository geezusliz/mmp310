const submitButton = document.getElementById('submit');
const storyP = document.getElementById('story');
const nounInput = document.getElementById('noun');
const verbInput = document.getElementById('verb');
const adjectiveInput = document.getElementById('adjective');
const placeInput = document.getElementById('place');
const nounError = document.getElementById('noun-error');
const verbError = document.getElementById('verb-error');
const adjectiveError = document.getElementById('adjective-error');
const placeError = document.getElementById('place-error');

submitButton.onclick = function() {
    
    const noun = nounInput.value;
    const verb = verbInput.value;
    const adjective = adjectiveInput.value;
    const place = placeInput.value;  
    
    
/*    
    if (!nounInput.value) {
		nounError.textContent = "Please enter a noun.";
	} 
    
    else if (!verbInput.value) {
		verbError.textContent = "Please enter a verb.";
	}
    else if (!adjectiveInput.value) {
		adjectiveError.textContent = "Please enter a adjective.";
	} 
    else if (!placeInput.value) {
		placeError.textContent = "Please enter a place.";
	} 
    else { 
    const story = "Once there was a " + noun + " named Jerry." + " Jerry " + verb + " his car on   his " + adjective + " trip home from " + place + ".";
        storyP.textContent = story;
    
    }
};
*/
 if (nounInput.value) {


    } else {
        nounError.textContent = "Please Enter a noun.";
    }
if (verbInput.value) {
    const story = "Once there was a " + noun + " named Jerry." + " Jerry " + verb + " his car on   his " + adjective + " trip home from " + place + ".";
        storyP.textContent = story;

    } else {
        verbError.textContent = "Please Enter a verb.";
    }

if (adjectiveInput.value) {
    const story = "Once there was a " + noun + " named Jerry." + " Jerry " + verb + " his car on   his " + adjective + " trip home from " + place + ".";
        storyP.textContent = story;

    } else {
        adjectiveError.textContent = "Please Enter a adjective.";
    }
if (placeInput.value) {
    const story = "Once there was a " + noun + " named Jerry." + " Jerry " + verb + " his car on   his " + adjective + " trip home from " + place + ".";
        storyP.textContent = story;

    } else {
        placeError.textContent = "Please Enter a place.";
    }
};