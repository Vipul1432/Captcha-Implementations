using Captcha.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text.Json;

namespace Captcha.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GoogleCaptchaController : ControllerBase
    {
        private readonly IHttpClientFactory _clientFactory;

        public GoogleCaptchaController(IHttpClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }

        [HttpPost("verify-recaptcha-v2")]
        public async Task<IActionResult> VerifyRecaptcha([FromQuery]string token)
        {
            var secretKey = "6Lfz3LcpAAAAABwwxHLxVj6DfxOgAuoVw5xtgTk1";
            var client = _clientFactory.CreateClient();

            var response = await client.GetAsync($"https://www.google.com/recaptcha/api/siteverify?secret={secretKey}&response={token}");
            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                var result = JsonConvert.DeserializeObject<RecaptchaResponseDto>(content);
                if (result.Success)
                {
                    // Recaptcha verification successful
                    return Ok();
                }
            }

            // Recaptcha verification failed
            return BadRequest("Failed to verify reCAPTCHA token.");
        }
    }
}
