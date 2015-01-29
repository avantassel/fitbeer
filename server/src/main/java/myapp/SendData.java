package myapp;

import java.io.IOException;
import javax.servlet.http.*;

public class SendData extends HttpServlet {
    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws IOException {
        resp.setContentType("text/json");
        resp.addHeader("Access-Control-Allow-Origin", "*");
        resp.addHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
        String responseString = "{ \"data\": [ ";
        responseString += "{ \"time\": \"2015-01-11\", \"x\":120 }";
        responseString += "{ \"time\": \"2015-01-11\", \"x\":121 }";
        responseString += "{ \"time\": \"2015-01-11\", \"x\":122 }";
        responseString += "{ \"time\": \"2015-01-11\", \"x\":123 }";
        responseString += "] }";
        resp.getWriter().println(responseString);
    }
}
