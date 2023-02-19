package sg.edu.nus.pafworkshop21.workshop21.models;

import org.springframework.jdbc.support.rowset.SqlRowSet;

import jakarta.json.JsonObject;

public class WeatherDetails {
    private String city;
    private String country;
    private String description;

    public String getCity() {return city;}
    public void setCity(String city) {this.city = city;}
    
    public String getCountry() {return country;}
    public void setCountry(String country) {this.country = country;}
    
    public String getDescription() {return description;}
    public void setDescription(String description) {this.description = description;}

    public static WeatherDetails create(JsonObject js) {
        WeatherDetails w = new WeatherDetails();
        w.setCity(js.getString("cityName"));
        w.setCountry(js.getString("country"));
        w.setDescription(js.getString("description"));
        return w;
    }

    public static WeatherDetails create(SqlRowSet rs) {
        WeatherDetails w = new WeatherDetails();
        w.setCity(rs.getString("city"));
        w.setCountry(rs.getString("country"));
        w.setDescription(rs.getString("description"));
        return w;
    } 
}
