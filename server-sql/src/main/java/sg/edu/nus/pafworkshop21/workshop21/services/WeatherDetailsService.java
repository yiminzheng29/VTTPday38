package sg.edu.nus.pafworkshop21.workshop21.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sg.edu.nus.pafworkshop21.workshop21.models.WeatherDetails;
import sg.edu.nus.pafworkshop21.workshop21.repositories.WeatherDetailsRepository;

@Service
public class WeatherDetailsService {
    
    @Autowired
    private WeatherDetailsRepository wdRepo;

    public void addWeather(WeatherDetails wd) {
        wdRepo.addWeather(wd);
    }
}
