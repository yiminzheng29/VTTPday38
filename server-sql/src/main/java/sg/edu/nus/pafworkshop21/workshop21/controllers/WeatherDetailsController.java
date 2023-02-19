package sg.edu.nus.pafworkshop21.workshop21.controllers;

import java.io.StringReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;
import sg.edu.nus.pafworkshop21.workshop21.models.WeatherDetails;
import sg.edu.nus.pafworkshop21.workshop21.services.WeatherDetailsService;

@Controller
@RequestMapping(path="/api")
public class WeatherDetailsController {
    
    @Autowired
    private WeatherDetailsService wdSvc;

    @PostMapping(path="/weather")
    @ResponseBody
    public ResponseEntity<String> postWeather(@RequestBody String payload) {
        System.out.printf("payload: %s\n", payload);

        JsonReader reader = Json.createReader(new StringReader(payload));
        JsonObject arr = reader.readObject();    

        // for list update of weather
        // JsonArray jsonArr = reader.readArray();

		// List<Task> tasks = jsonArr.stream()
		// 		.map(v -> v.asJsonObject())
		// 		.map(v -> Task.create(v))
		// 		// method reference
		// 		//.map(Task::create)
		// 		.toList();

        WeatherDetails wd = WeatherDetails.create(arr);
        wdSvc.addWeather(wd);

        JsonObject resp = Json.createObjectBuilder()
            .add("weather saved: ", wd.getCity())
            .build();
        return ResponseEntity.ok(resp.toString());
    }
}
