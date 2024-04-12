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
            var secretKey = "";
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
        [HttpPost("verify-recaptcha-v3")]
        public async Task<IActionResult> VerifyRecaptchav3([FromQuery] string token)
        {
            var secretKey = "";
            var client = _clientFactory.CreateClient();

            var parameters = new Dictionary<string, string>
            {
                { "secret", secretKey },
                { "response", token }
            };
            var encodedContent = new FormUrlEncodedContent(parameters);

            var response = await client.PostAsync("https://www.google.com/recaptcha/api/siteverify", encodedContent);
            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                var result = JsonConvert.DeserializeObject<Recaptchav3ResponseDto>(content);
                if (result.Score >= 0.5m)
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
