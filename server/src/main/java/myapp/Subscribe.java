package myapp;

import java.io.IOException;
import javax.servlet.http.*;

public class Subscribe extends HttpServlet {
    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws IOException {
        resp.setContentType("text/plain");
        resp.getWriter().println("Subscription sent");
    }
}
