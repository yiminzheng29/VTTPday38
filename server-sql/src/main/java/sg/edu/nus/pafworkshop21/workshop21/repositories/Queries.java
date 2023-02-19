package sg.edu.nus.pafworkshop21.workshop21.repositories;

public class Queries {
    public static final String SQL_INSERT_WEATHER_DETAILS = """
            insert into weather(city, country, description) values (?, ?, ?)
            """;
}
