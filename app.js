// ✅ Fill these in once and the whole site updates.
const BARBER = {
  bookingUrl: "https://example.com/book",     // Booksy/Square/Calendly link
  instagramUrl: "https://instagram.com/username",
  phone: "+1-314-555-5555",
  mapsUrl: "https://maps.google.com/?q=Your+Shop+Address"
};

function setHref(id, url){
  const el = document.getElementById(id);
  if (el && url) el.href = url;
}

function setPhone(id, phone){
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = phone;
  el.href = `tel:${phone.replace(/[^\d+]/g, "")}`;
}

document.getElementById("year").textContent = new Date().getFullYear();

["bookTop","bookHero","bookCard","bookServices","bookLocation","bookBottom"].forEach(id => {
  setHref(id, BARBER.bookingUrl);
});

setHref("igLink", BARBER.instagramUrl);
setHref("mapsLink", BARBER.mapsUrl);

setPhone("phoneLink", BARBER.phone);
setPhone("phoneLink2", BARBER.phone);