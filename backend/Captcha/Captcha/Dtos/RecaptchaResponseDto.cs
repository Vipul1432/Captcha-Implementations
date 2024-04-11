namespace Captcha.Dtos
{
    using Newtonsoft.Json;
    using System.Collections.Generic;

    public class RecaptchaResponseDto
    {
        [JsonProperty(PropertyName = "success")]
        public bool Success { get; set; }
        [JsonProperty(PropertyName = "challenge_ts")]
        public string ChallengeTs { get; set; }
        [JsonProperty(PropertyName = "hostname")]
        public string Hostname { get; set; }
    }
}

