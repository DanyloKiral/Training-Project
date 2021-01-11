using ContactBook.API.Models.Dto;
using ContactBook.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace ContactBook.API.Controllers
{
    [Route("api/contact")]
    public class СontactController : Controller
    {
        private readonly IContactService _contactService;

        public СontactController(IContactService service)
        {
            _contactService = service;
        }

        [HttpGet]
        public IActionResult GetContacts()
        {
            return Ok(_contactService.GetContacts());
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetContacts(int id)
        {
            return Ok(_contactService.GetContact(id));
        }

        [HttpPut]
        public IActionResult UpdateContact([FromBody] ContactDto contact)
        {
            _contactService.UpdateContact(contact);
            
            return Ok();
        }

        [HttpPost]
        public IActionResult AddContact([FromBody] ContactDto contact)
        {
            _contactService.AddContact(contact);

            return Ok();
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteContact(int id)
        {
            _contactService.DeleteContact(id);

            return Ok();
        }
    }
}
