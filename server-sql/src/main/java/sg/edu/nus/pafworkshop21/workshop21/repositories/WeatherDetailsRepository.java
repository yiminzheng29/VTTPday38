package sg.edu.nus.pafworkshop21.workshop21.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import sg.edu.nus.pafworkshop21.workshop21.models.WeatherDetails;
import static sg.edu.nus.pafworkshop21.workshop21.repositories.Queries.*;

@Repository
public class WeatherDetailsRepository {
    
    @Autowired
    private JdbcTemplate template;

    // for batch update
    // public void add(List<WeatherDetails> wdList) {
    //     List<Object[]> objList = wdList.stream()
    //         .map( li -> {
    //             Object[] l = new Object[2];
    //             l[0] = li.getCity();
    //             l[1] = li.getCountry();

    //             return l;
    //         }).toList();

    //     template.batchUpdate(SQL_INSERT_WEATHER_DETAILS, objList);
    // }

    public void addWeather(WeatherDetails wd) {
        template.update(SQL_INSERT_WEATHER_DETAILS, wd.getCity(), wd.getCountry(), wd.getDescription());
    }
}
