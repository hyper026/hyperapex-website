const menuToggle=document.querySelector('.menu-toggle');const navLinks=document.querySelector('.nav-links');if(menuToggle&&navLinks){menuToggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open)});document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>{navLinks.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}));}const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();

// Add a clear categorized service directory to the homepage without changing the existing visual service cards.
const services=document.getElementById('services');
if(services&&!document.getElementById('service-categories')){
 const section=document.createElement('div');section.id='service-categories';section.className='container';section.style.marginTop='2rem';
 section.innerHTML=`<div class="section-heading"><span class="eyebrow">EXPLORE ALL SERVICES</span><h2>Professional solutions, organised around your needs.</h2><p>Choose a service area below to explore the dedicated page and learn how Hyper Apex can assist.</p></div><div class="values-grid"><article><span>01</span><h3>Legal, Compliance &amp; Immigration</h3><p>Tax, eTIMS, legal, conveyancing, company registration and immigration support.</p><a class="text-link" href="services-directory.html">Explore Legal &amp; Compliance →</a></article><article><span>02</span><h3>Finance &amp; Assurance</h3><p>Accounting, financial reporting and audit &amp; assurance support for organisations.</p><a class="text-link" href="services-directory.html">Explore Finance &amp; Assurance →</a></article><article><span>03</span><h3>Technology &amp; Digital</h3><p>IT support, cybersecurity, websites, software systems and digital transformation advisory.</p><a class="text-link" href="services-directory.html">Explore Technology &amp; Digital →</a></article></div>`;
 services.appendChild(section);
}

// Link the existing homepage service cards to their dedicated pages.
const serviceLinks={
 'Taxation & eTIMS Compliance':'tax-etims.html','Commercial & Conveyancing':'conveyancing.html','Legal Services':'legal-services.html','Company Registration & Corporate Services':'company-registration.html'
};
document.querySelectorAll('#services .service-card h3').forEach(h=>{const key=h.textContent.trim();const href=serviceLinks[key];if(href){let link=h.parentElement.querySelector('.text-link');if(link)link.href=href;}});

// Extend the consultation form with the new Finance and Technology service options.
const form=document.getElementById('contactForm'),status=document.getElementById('formStatus'),select=form?form.querySelector('select[name="service"]'):null;
if(select){['Accounting Services','Audit & Assurance Support','IT Support & Managed Services','Cybersecurity Services','Website & Digital Services','Software & Business Systems','Digital Transformation & ICT Advisory'].forEach(v=>{const o=document.createElement('option');o.textContent=v;o.value=v;select.appendChild(o);});}
if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent(`Website enquiry - ${d.get('service')}`);const body=encodeURIComponent(`Dear Hyperapex Consultancy Firm Limited,\n\nI would like to make an enquiry.\n\nName: ${d.get('name')}\nCompany / Organization: ${d.get('company')||'N/A'}\nEmail: ${d.get('email')}\nPhone: ${d.get('phone')}\nService Required: ${d.get('service')}\n\nMessage:\n${d.get('message')}\n\nKind regards,\n${d.get('name')}`);window.location.href=`mailto:hyperapexconsult@gmail.com?subject=${subject}&body=${body}`;if(status)status.textContent='Your email application should now open with the enquiry prepared.';});}