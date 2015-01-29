package myapp;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.io.IOException;
import javax.servlet.http.*;

public class GetData extends HttpServlet {
    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws IOException {
        resp.setContentType("text/json");
        resp.addHeader("Access-Control-Allow-Origin", "*");
        resp.addHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
        String responseString = "{ \"data\": [ ";
        Calendar now = Calendar.getInstance();
        SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM-dd");
        for (int i = 0; i < 15; i++) {
            String formatted = format1.format(now.getTime());
            now.add(Calendar.SECOND, 5);
            System.out.println(formatted);
            responseString += "{ \"time\": "+formatted+" }";
            if (i != 14) responseString += ",";
        }
        responseString += "] }";
        resp.getWriter().println(responseString);
    }
}
